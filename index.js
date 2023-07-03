function Spa() {
  return (
      <>
      <h1>Welcome to Bad Bank</h1>
      <NavBar/>
      </>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')


    <HashRouter>
      <NavBar/>        
      <Route path="/" exact component={Home} />
      <Route path="/CreateAccount/" component={CreateAccount} />
      <Route path="/login/" component={Login} />
      <Route path="/deposit/" component={Deposit} />
      <Route path="/withdraw/" component={Withdraw} />
      <Route path="/balance/" component={Balance} />
      <Route path="/alldata/" component={AllData} />
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
