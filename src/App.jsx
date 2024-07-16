import { useState } from 'react';
import './globals.css';
import styles from './App.module.css';
import { Post } from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            <Post 
              author="Eduardo Daniel"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
             <Post 
              author="Daniel Geraldo"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </main>
      </div>
    </div>
  )
}

export default App
