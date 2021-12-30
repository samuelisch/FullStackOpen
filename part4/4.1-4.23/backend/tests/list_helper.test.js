const listHelper = require('./test_helper');

const listWithOneBlog = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 5,
    __v: 0
  },
]

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 17,
    __v: 0
  },
  {
    _id: "9f342309f92hffd2343f2",
    title: "React other patterns",
    author: "Michael Chan",
    url: "https://patternreacts.com/",
    likes: 2,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "1934931rj9314193489frj10139",
    title: "Sudo Statement Also Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Sudo-Statement-Also-Considered-Harmful.html",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  },
  {
    _id: "134134134rjfj249f94294f9jd9240",
    title: "Javascript for noobs",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2020/05/01/JS-for-noobs.html",
    likes: 0,
    __v: 0
  }  
]

test("dummy returns one", () => {
  const blogs = [];

  expect(listHelper.dummy(blogs)).toBe(1);
})

describe('total likes', () => {

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('when list has many blogs, equals the likes of that', () => {
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(58)
  })
})

describe('favourite blog', () => {

  test('in list of many, return the one with the highest num of likes', () => {
    const result = listHelper.favouriteBlog(blogs);
    expect(result).toEqual({
      title: "React patterns",
      author: "Michael Chan",
      likes: 17
    })
  })
})

describe('top awards', () => {

  test('return author with most blogs, along with number of blogs he has published' , () => {
    const result = listHelper.mostBlogs(blogs);
    expect(result).toEqual({
      author: 'Robert C. Martin',
      blogs: 4
    })
  })
  test('return author with most likes, along with number of total likes he has' , () => {
    const result = listHelper.mostLikes(blogs);
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 27
    })
  })
})