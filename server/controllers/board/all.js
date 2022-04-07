const { sortDist } = require("../database");
const { User, Post, Post_tag } = require("../../models");
module.exports = {
  get: async (req, res) => {
    let { isLogin, accessToken, cocodusId, nickName, howMany } = req.query;
    if (isLogin === "true" && accessToken && cocodusId && nickName) {
      let userLoc = await User.findOne({
        where: { id: cocodusId },
        attributes: ["lat", "long"],
      });
      let postLoc = await sortDist(userLoc.dataValues);
      let result = [];
      for (let i = 0; i < postLoc.length; i++) {
        let temp = Post.findOne({
          where: { id: postLoc[i] },
          attributes: [
            "id",
            "user_id",
            "jsonfile",
            "recruiting",
            "online",
            "veiw_count",
            "total_like",
          ],
        });
        result.push(temp);
      }
      let cal = await Promise.all(result);
      return res
        .status(200)
        .send(
          cal
            .filter((x, i) =>
              i >= howMany[0] && i < howMany[0] + howMany[1] ? true : false
            )
            .map((x, i) => x.dataValues)
        );
    }
    if (isLogin === "false" && !accessToken && !nickName) {
      let temp = await Post.findAll({
        attributes: ["jsonfile"],
        offset: Number(howMany[0]) || 0,
        limit: Number(howMany[1]),
        subQuery: false,
      });

      return res.status(200).send(temp);
    }
    console.log("이 말이 나온다면 클라에서 useEffect관리해야한다.");
    res.status(204).send(null);
  },
};
