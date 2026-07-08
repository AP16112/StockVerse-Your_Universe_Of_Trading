// Here we are creating this 'WatchList' component to be used in the dashboard of our application.



export default function WatchList() {
  return (
    <div className="watchlist-container">
        <div className="search-container">
            <input type="text"  name="search"  id="search"  placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"  className="search"/>
            <span className="counts"> 9 / 50</span>
        </div>

        <ul className="list"></ul>
    </div>
  );
}