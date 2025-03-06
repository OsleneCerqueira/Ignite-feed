import { Header } from './components/Header';
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/oslenecerqueira.png',
      name: 'Oslene Cerqueira',
      role: 'Estudante'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-03-04 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'Educator @Rocketseat'
    },
    content: [
        { type: 'paragraph', content: 'Oi, pessoal! 👋' },
      
        { type: 'paragraph', content: 'Recentemente, terminei um novo projeto que estou muito animado para compartilhar. Durante o NLW Return da Rocketseat, desenvolvi o DoctorCare, uma plataforma incrível voltada para cuidados médicos. Se você está curioso, dê uma olhada!' },
      
        { type: 'link', content: 'https://diego.design/doctorcare' }
      ],      
    publishedAt: new Date('2025-03-05 20:00:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}