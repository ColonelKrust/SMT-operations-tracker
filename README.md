# SMT Line Tracker
Data tracking and visualization for circuit board manufacturing operations within SMT departments.

#Landing Page
<img width="1792" alt="Screenshot 2025-01-20 at 3 10 55 PM" src="https://github.com/user-attachments/assets/b03bc76a-c4d1-4dde-a13e-ab02bd16eb00" />

The landing page grants the user with two options for naviagtion through the app:
- Runtime Data
- New Run

New Run will navigate the user to a Runtime Form. This form will contain fields regarding the latest assembly being assembled on the SMT line such as: the date, operator name, assembly number, which line is the assembly run on, the total runtime of both pick and place machines, and any delays that occured during the assembly.

<img width="1792" alt="Screenshot 2025-01-20 at 3 11 33 PM" src="https://github.com/user-attachments/assets/fc036a44-6356-481e-a63c-7892f47ef24e" />

Runtime Data will route the user to page that visualizes data previously entered in the database through the Runtime Form. This will grant the users the ability to look at average runtimes and common delays for specific assemblies to better understand and optimize the SMT manufacturing process.

Tech Stack:
- React
- SurveyJS
- Node
- ExpressJS
- Webpack
- Babel
