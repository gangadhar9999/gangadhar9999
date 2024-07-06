
function App() {
  return (
    <>
  

		<div class="main">
		<body bgcolor="lightgreen" >
      <center>
			<h2>Registration Form</h2>
      </center>
      
			<form action="">
      <center>
				<label for="first"
					>First Name:</label
				>
      
  			<input
					type="text"
					id="first"
					name="first"
					required
				/>
        </center>

        <center>
				<label for="last"
					>Last Name:</label
				>
				<input
					type="text"
					id="last"
					name="last"
          required
          
				/>
        </center>
          <center>
				<label for="email">Email_id:</label>
				<input
					type="email"
					id="email"
					name="email"
					required
				/>
        </center>
        <center>

				<label for="password">Password:</label>
				<input
					type="password"
					id="password"
					name="password"
					pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
					title="Password must contain at least one number, 
						one alphabet, one symbol, and be at 
						least 8 characters long"
					required
				/>
        </center>
        <center>
				<label for="repassword"
					>Re-Enter:</label
				>
				<input
					type="password"
					id="repassword"
					name="repassword"
					required
				/>
        </center>
           <center>
				<label for="mobile"
					>Contact:</label
				>
				<input
					type="text"
					id="mobile"
					name="mobile"
					maxlength="10"
					required
				/>
        </center>
          <center>
				<label for="gender"
					>Gender:</label
				>
				<select
					id="gender"
					name="gender"
					required
				>
					<option value="male">
						Male
					</option>
					<option value="female">
						Female
					</option>
					<option value="other">
						Other
					</option>
				</select>
        </center>
		<center>
		<label for="choose course"
					>Choose course:</label>
				<select
					id="course"
					name="course"
					required
				>
					<option value="cloud">
						cloud
					</option>
					<option value="python">
						python
					</option>
					<option value="sql">
						sql
					</option>
				</select>
		</center>
        <center>
				<button type="submit">
					Submit
				</button>
				<button type="cancel">
					cancel
				</button>
        </center>
		
			</form>
			</body>
		
		</div>
    </>
  );
}
export default App;
