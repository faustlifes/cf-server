let instance;

class Singleton {
  static getInstance = () => {
    if (!instance) {
      instance = new Singleton();
    }
    return instance;
  }
}

export default Singleton;
