module.exports = (user) => ({
	id: user._id,
	email: user.email,
	balance: user.balance
})
