function DashBoard({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Waad login garaysantahay!</p>
      ) : (
        <p>Fadlan login garay.</p>
      )}

      {isLoggedIn ? <p>yes true</p> : <p>no false</p>}
    </div>
  );
}

export default DashBoard;