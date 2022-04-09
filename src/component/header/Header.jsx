import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">World-Of-Thoughts</span>
        <span className="headerTitleLg">ESSENCE OF LIFE</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1644805094240-fa317a0e1325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80"
        alt=""
      />
    </div>
  );
}