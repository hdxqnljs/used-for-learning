const friendships = [
  ['Alex', 'Claire'],
  ['Phil', 'Jay'],
  ['Joe', 'Luke'],
  ['Gloria', 'Mitchell'],
  ['Alex', 'Haley'],
  ['Gloria', 'Lily'],
  ['Haley', 'Phil'],
  ['Mitchell', 'Luke'],
  ['Jay', 'Claire'],
  ['Lily', 'Manny'],
];
/*

通过纸上画图，以及实际运行测试，areTheyFriends可以实现的非常简单，不用像之前那么复杂
原理还是用队列做广度优先搜索，移动指针
*/
function areTheyFriends(user1, user2) {
   const queue = [user1];
   // 指针，用来遍历队列
   let pointer = 0;
   let temp = false;
   //跳出循环条件：当队列被遍历完
   while(pointer < queue.length) {
    temp = friendships
      // 两个过滤条件：1. 第一个人是当前指针指向的人 2.朋友不能已经在队列中出现过，这里有性能担忧，可以使用hash记录
      .filter((relationArr) => relationArr[0] === queue[pointer] && queue.indexOf(relationArr[1]) < 0)
      // 把朋友push到队列末尾
      .some((relationArr) => {
        queue.push(relationArr[1]);
        return relationArr[1] === user2;
      });
    // temp为true即找到了user2
    if (temp) {
      return console.log('true, ======', user1, ' ', user2);
    }
    // 没有找到user2，移动指针继续
    pointer++;
   }
   // 遍历结束意味着没有找到user2
   return console.log('false, ======', user1, ' ', user2);
}

// 队列会是一个不重复的字符串数组
// 例如 [ 'Alex', 'Claire', 'Haley', 'Phil', 'Jay' ]
areTheyFriends("Alex", "Jay") // true
areTheyFriends("Alex", "Manny") // false

/*
  我这里当时一直没想出来，不用数组实现顺序结构是什么意思
  假设实现一个这样的结构  {
    '0': 'shopeeResult',
    '1': 'jsResult',
    '2': 'airpayResult'
  }
  这样毫无意义，还是类数组结构，而且还需要自己维护顺序
  后面想到了react 的 updatequeue，有点懂你们意思了
  所以我实现的是一个链表，头尾相接，有一个指针永远指向尾部元素，如下
 lastEl => D -> A -> B -> C -> D
           
*/

function Cache(capacity) {
  this.capacity = capacity;
  // 目前循环链表中一共有几个元素
  this.currentLen = 0;
  // 循环链表
  this.lastEl = null; 
}

Cache.prototype.set = function(key, value) {
  const item = { key, value };
  // 循环链表中没有任何一项
  if (this.currentLen <= 0) {
    item.next = item;
    this.lastEl = item;
    this.currentLen++;
    return;
  }
  // 循环链表中存在元素
  const firstEl = this.lastEl.next;
  // 这里item变成了末尾元素
  this.lastEl.next = item;
  if (this.currentLen >= this.capacity) {
    // 如果链表已经满了，末尾元素的next指向首元素的next，相当于删除旧的首元素
    item.next = firstEl.next;
  } else {
    // 如果链表没满，将末尾元素的next指向首元素即可
    item.next = firstEl;
    this.currentLen++;
  }
  // lastEl 永远指向最后添加的元素
  this.lastEl = item;
};

Cache.prototype.get = function(key) {
  let result = null;
  let i = 0;
  let currentEl = this.lastEl ? this.lastEl.next : null;
  while (i < this.currentLen) {
    if (currentEl.key === key) {
      result = currentEl.value;
      break;
    }
    currentEl = currentEl.next;
    i++;
  }

  // console.log('====== ', result);
  return result; 
};



// capacity=5
const cache = new Cache(5);
cache.set('shopee', 'shopeeResult');
cache.set('javescript', 'jsResult');
cache.set('airpay', 'airpayResult');
cache.set('node', 'nodeResult');
cache.set('npm', 'npmResult');

function search(keyword) {
  const res = cache.get(keyword)  
  console.log(res)
}

search('shopee') //shopeeResult
search('npm') //npmResult
cache.set('php', 'phpResult')
search('npm') //npmResult
search('node') //null
