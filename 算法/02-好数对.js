/**
给你一个整数数组 nums 。

如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。

返回好数对的数目。

示例 1：

输入：nums = [1,2,3,1,1,3]
输出：4
解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
示例 2：

输入：nums = [1,1,1,1]
输出：6
解释：数组中的每组数字都是好数对
示例 3：

输入：nums = [1,2,3]
输出：0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = 0;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map[num] !== undefined) {
      count += map[num];
      map[num]++;
    } else {
      map[num] = 1;
    }
  }
  return count;
};

/**
 * 👦 举个“拍合照”的例子假设房间里已经有 3 个穿红衣服的小朋友（A、B、C）。现在，第 4 个穿红衣服的小朋友（D） 推门进来了。题目要求找出所有两个红衣服组合的可能（也就是 D 能和谁两两合影）。D 可以和 A 拍一张。 (第 1 对)D 可以和 B 拍一张。 (第 2 对)D 可以和 C 拍一张。 (第 3 对)瞧！因为前面已经有了 3 个人，D 这一个人进来，一口气就新诞生了 3 个好数对！如果写 count += map[num]（此时 map[num] 是 3），那 count 就会正确地加上 3。如果写 count++，那 count 只会加上 1，D 与 B、C 的合影就被你漏掉了！
 */
