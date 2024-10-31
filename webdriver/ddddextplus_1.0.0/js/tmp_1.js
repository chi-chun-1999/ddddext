var ticket_num =4;

var ticket_form_str = "TicketForm_ticketPrice_0";

for(var i=0;i<9;i++)
{
   var tmp = ticket_form_str+i;
   if(document.getElementById(tmp))
   {
     document.getElementById(tmp).value=ticket_num;
   }
}