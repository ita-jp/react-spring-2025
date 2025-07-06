import { Link } from 'react-router-dom'

function TopPage() {
  return (
    <>
      <h1>Todo アプリ</h1>
      <Link to="/login">ログインページへ</Link>
    </>
  )
}

export default TopPage
