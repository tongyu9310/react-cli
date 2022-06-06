type Storage = {
  set: <T>(key: string, val: T) => boolean;
  get: <T>(key: string) => T | null;
  remove: (key: string) => boolean;
  clear: () => boolean;
};
/**
 * 本地存储
 */
export const storage: Storage = {
  set: (key, val) => {
    if (!key || !localStorage) return false;
    try {
      localStorage.setItem(key, JSON.stringify(val));
      return true;
    } catch (e) {
      return false;
    }
  },
  get: (key) => {
    if (!key || !localStorage) return null;
    let val;
    try { 
      val=JSON.parse(localStorage.getItem(key));
    } catch (e) {
      val=null
    }
    return val;
  }, 
  remove: (key) => {
    if (!key || !localStorage) return false;
    localStorage.removeItem(key);
    return true;
  },
  clear: () => {
    if (!localStorage) return false;
    try {
      localStorage.clear();
      return true;
    } catch (e) {
      return false;
    }
  }
}