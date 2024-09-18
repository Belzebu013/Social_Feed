import { useState } from 'react';
import './globals.css';
import styles from './App.module.css';
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Belzebu013.png',
      nome: 'Eduardo Daniel',
      role: 'Full Stack Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Pega esse post maneiro no projetinho de React 🚀. Simples porém bem daooooora.'
      },
      {
        type: 'link',
        content: 'https://github.com/Belzebu013/Social_Feed'
      }
    ],
    publishedAt: new Date('2024-07-24 19:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Belzebu013.png',
      nome: 'Daniel Geraldo',
      role: 'PHP Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Pega esse post maneiro no projetinho de React 🚀. Simples porém bem daooooora.'
      },
      {
        type: 'link',
        content: 'https://github.com/Belzebu013/Social_Feed'
      }
    ],
    publishedAt: new Date('2024-05-24 15:00')
  },
];

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
          </main>
      </div>
    </div>
  )
}

export default App
