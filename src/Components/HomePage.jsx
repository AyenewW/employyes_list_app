import EmployeeList from './EmployeeList';
import Header from './Header';
import SearchBar from './SearchBar';

const HomePage = () => {
  return (
    <div style={StyledHomePage}>
      <div style={StyledHeaderContent}>
        <Header title="EMPLOYEES DIRECTORY" />
        </div>
        <SearchBar />
        <EmployeeList />
      </div>
    
  );
}

const StyledHomePage = {
  width: '50%',
  fontFamily: "strong",
};

const StyledHeaderContent = {
  width: '100%',
  marginLeft: '150px',
};

export default HomePage;