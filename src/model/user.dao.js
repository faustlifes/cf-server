import r from 'rethinkdb';

let instance;

class UserDao {

  static getInstance = () => {
    if (!instance) {
      instance = new UserDao();
    }
    return instance;
  }

  getUserList = (filter) => {

  };

  getUser = (id) => {

  };
  addUser = (user) => {

  };
  updateUser = (user) => {

  };
  deleteUser = (id) => {

  };

}

export default UserDao.getInstance();
