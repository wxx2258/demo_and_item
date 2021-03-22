function cacheFactory(storageKey: string, defaultData = {}) {
  function getObjCacheValue(key?: string | number) {
    let cacheMsg: any = defaultData;
    try {
      cacheMsg = JSON.parse(localStorage.getItem(storageKey) || '');
    } catch (error) {}
    if (
      (typeof key === 'number' && Array.isArray(cacheMsg)) ||
      typeof key === 'string'
    ) {
      return cacheMsg[key];
    } else {
      return cacheMsg;
    }
  }
  function setObjCache(value: Record<string, unknown> | any[]) {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }
  function clearObjCache() {
    localStorage.setItem(storageKey, JSON.stringify(defaultData));
  }
  return {
    getObjCacheValue,
    setObjCache,
    clearObjCache,
  };
}

export const projectPathCache = cacheFactory('PROJECT_PATH_CACHE')
