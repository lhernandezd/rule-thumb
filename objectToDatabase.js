const axios = require('axios');

const candidates = [
  {
    name: 'Kanye West',
    category: 'Entertainment',
    description: 'Vestibulum diam ante, porttitos a odio eget, rhoncus neque. Aenean eu velit libero.',
    photo: 'https://i.ibb.co/1fSnd3T/kanye.png',
    votes: 0,
    positiveVotes: 0
  },
  {
    name: 'Mark Zuckerberg',
    category: 'Business',
    description: 'Vestibulum diam ante, porttitos a odio eget, rhoncus neque. Aenean eu velit libero.',
    photo: 'https://i.ibb.co/YBTbPQY/mark.png',
    votes: 0,
    positiveVotes: 0
  },
  {
    name: 'Cristina Fernández de Kirchner',
    category: 'Politics',
    description: 'Vestibulum diam ante, porttitos a odio eget, rhoncus neque. Aenean eu velit libero.',
    photo: 'https://i.ibb.co/9hHvLMv/cristina.png',
    votes: 0,
    positiveVotes: 0
  },
  {
    name: 'Malala Yousafzai',
    category: 'Entertainment',
    description: 'Vestibulum diam ante, porttitos a odio eget, rhoncus neque. Aenean eu velit libero.',
    photo: 'https://i.ibb.co/80bYwx2/malala.png',
    votes: 0,
    positiveVotes: 0
  }
];

candidates.forEach(async candidate => {
  try {
    const response = await axios.post('http://localhost:3000/api/candidates', candidate)
    const { data: { data } } = response;
    console.log('Candidate registered', data);
  } catch (error) {
    console.log(error)
  }
});
