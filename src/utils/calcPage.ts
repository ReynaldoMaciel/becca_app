const calcPage = ({ page = 0, take = 5 }) => {
  return { take, offset: page * take };
};

export default calcPage;
