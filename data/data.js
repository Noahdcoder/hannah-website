import {
    FaUserFriends,
    FaRegHandshake,
    FaPhone,
    FaPen,
    FaImages,
    FaFacebook, 
    FaLinkedin, 
    FaInstagram, 
    FaTwitter
} from 'react-icons/fa';

export const links = [
    {
        id: 1,
        url: '/about',
        text: 'About',
        icon: <FaUserFriends />
    },
    {
        id: 2,
        url: '/services',
        text: 'Services',
        icon: <FaRegHandshake />
    },
    {
        id: 3,
        url: '/contact',
        text: 'Contact',
        icon: <FaPhone />
    },
    {
        id: 4,
        url: '/blog',
        text: 'Blog',
        icon: <FaPen />
    },
    {
        id: 5,
        url: '/gallery',
        text: 'Gallery',
        icon: <FaImages />
    }
]

export const social = [
    {
      id: 1,
      url: 'https://facebook.com/aghedo.hannah',
      icon: <FaFacebook />,
      color: '#1877f2'
    },
    {
      id: 2,
      url: 'https://twitter.com/chubbyanny',
      icon: <FaTwitter />,
      color: '#1da1f2'
    },
    {
      id: 3,
      url: 'https://www.linkedin.com/in/hannah-aghedo-8136a9ab',
      icon: <FaLinkedin />,
      color: '#0e76a8'
    },
    {
      id: 4,
      url: 'https://www.instagram.com/hannahaghedo/',
      icon: <FaInstagram />,
      color: '#e4405f'
    }
  ];

  export const shareSocial = [
    {
      id: 1,
      url: 'https://www.facebook.com/sharer/sharer.php?u=https://hannahaghedo.com/blog/',
      icon: <FaFacebook />,
      color: '#1877f2'
    },
    {
      id: 2,
      url: 'https://twitter.com/intent/tweet?text=https://hannahaghedo.com/blog/',
      icon: <FaTwitter />,
      color: '#1da1f2'
    },
    {
      id: 3,
      url: 'https://www.linkedin.com/sharing/share-offsite/?url=https://hannahaghedo.com/blog/',
      icon: <FaLinkedin />,
      color: '#0e76a8'
    }
  ];