const db = require("../models");
const User = db['user'];
const Group = db['group'];

checkDuplicateUsernameOrEmail = (req, res, next) => {
// Email
User.findOne(
{
    where:
    {
    email: req.body.email
    }
})
.then(user =>
{
    if (user)
    {
    res.status(400).send(
    {
        message: "Failed! Email is already in use!"
    });
    return;
    }
    next();
});
};

checkGroupsExisted = (req, res, next) =>
{
    if (req.body.group)
    {
      for (let i = 0; i < req.body.groups.length; i++)
      {
        if (!Group.includes(req.body.groups[i]))
        {
          res.status(400).send(
            {
                message: "Failed! Role does not exist = " + req.body.groups[i]
            });
          return;
        }
      }
    }
    next();
};

const verifySignUp = {
checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
checkGroupsExisted: checkGroupsExisted
};

module.exports = verifySignUp;