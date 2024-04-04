import { CalendarComponent, WorkoutForm, SmallCalendarComponent } from "./components/ui/index";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <CalendarComponent />
      <WorkoutForm />
      <SmallCalendarComponent />
    </div>
  );
}

export default App;
