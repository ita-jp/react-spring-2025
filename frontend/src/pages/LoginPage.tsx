import { Link } from 'react-router-dom'

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('call handleSubmit')
  }

  return (
    <div>
      <h1>ログインページ</h1>
      <Link to="/">トップページへ戻る</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
          />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  )
}
