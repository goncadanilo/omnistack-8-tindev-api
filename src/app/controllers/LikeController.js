const Dev = require('../models/Dev')

class LikeController {
  async store (req, res) {
    const { id } = req.params
    const { user } = req.headers

    const loggedDev = await Dev.findById(user)
    const targetDev = await Dev.findById(id)

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' })
    }

    if (targetDev.likes.includes(user)) {
      console.log('DEU MACTH')
    }

    loggedDev.likes.push(targetDev._id)
    await loggedDev.save()

    return res.status(200).json(loggedDev)
  }
}

module.exports = new LikeController()
