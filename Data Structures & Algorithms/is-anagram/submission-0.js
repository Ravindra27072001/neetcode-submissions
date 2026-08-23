class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map();
        for(let i=0; i<s.length; i++){
            map.set(s[i], (map.get(s[i])||0)+1)
        }
        // console.log(map)

        for(let j=0; j<t.length; j++){
            if(!map.has(t[j])){
                return false;
            }
            map.set(t[j], (map.get(t[j])-1))
            if(map.get(t[j])===0){
                map.delete(t[j])
            }
        }
        return map.size === 0
    }
}
