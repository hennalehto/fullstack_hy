const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const likes = blogs.map((i) => i.likes)
  const total = likes.reduce((sum, previous) => {
  	return sum + previous
  }, 0)
  return total
}

const favoriteBlog = (blogs) => {
  const likes = blogs.map((i) => i.likes)
  const favoriteLikes = likes.reduce((first, second) => {
  	if (first < second) {
  	  first = second
  	}
  	return first
  }, 0)
  const favorite = blogs.filter((blog) => {
  	console.log(blog.likes + " = " + favoriteLikes)
  	return blog.likes === favoriteLikes
  })
  console.log(favorite)
  return favorite
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}