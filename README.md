# Cash_program
This program is made for a company wich rents out contruction machines and instruments.
Helps to write&amp;print contract. It has backend so you can't use it from github pages (actually you can but fewer features are avaible).

Features:
- You can select client, guarantor and machine name from the list
- The names in the list are from previous contract or registrated from the admin panel
- When you select the name of the client (or the guarantor or the machine) it automically fills out its datas
- You can also edit the database records from the admin panel
- It automatically recommends discounts that are avaible (weekend, long time renting or holidays) UPDATE: it has been removed at the owner's request. You can find the code in function discountRecommendation()
- When you are ready the program it fills the pdf and you can print it
- At the system startup it checks for updates and offers you to download if it is needed

Technical information:
- It uses node server with mySql
