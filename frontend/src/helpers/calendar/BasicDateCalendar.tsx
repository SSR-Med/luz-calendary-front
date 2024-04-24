// Dependencies
import { LocalizationProvider, DateCalendar} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "dayjs/locale/es";


export default function BasicDateCalendar() {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        <DateCalendar sx={{width:"100%", height:"40%"}} />
      </LocalizationProvider>
    );
  }