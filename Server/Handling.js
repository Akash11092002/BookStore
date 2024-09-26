const express = require('express');
const cors = require('cors');
const dbconn = require('./Database/DbConn'); // Import the connectDB function
const User = require('./Model/UserSchema'); // Import the User schema
const Admin= require('./Model/Admindata');
const Addata= require('./Model/Admin')

const app = express();
const port = 8091;

app.use(cors());
app.use(express.json());

app.post('/loginHandler',async  (req, res) => {
    
    try{

   
    {
      await dbconn();
        const { email, password } = req.body;
        console.log(email);
    console.log(password);
    const user = await User.findOne({ email });
    


    if (!user) {
      return res.status(404).json({ success: false, message: 'Invalid email or password' });

    }

    

    
       
    
    // Check password (In this example, we're comparing the password in plain text)
    if (password === user.password) {
     
      return  res.status(200).json({ success: true, message: 'Login successful' });

    }
    else{
      return  res.status(401).json({ success: false, message: 'password not matched' });
    }

   
    
  } }
  catch(err){
    console.log("error"+err);
    res.status(500).json({message:'internal server error'})

  }

    // Implement login logic here...
});
app.post('/adminHandler',async  (req, res) => {
    
    
  {
    await dbconn();
      const { email, password } = req.body;
      console.log(email);
  console.log(password);
  const user = await Addata.findOne({ email });
  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
  
  
     
  
  // Check password (In this example, we're comparing the password in plain text)
  if (password !== user.password) {
    console.log("hello i not")
    return res.status(401).json({ success: false, message: 'Login failed'})

  }

  res.json({ message: 'Login successful' });
  
}


  // Implement login logic here...
});


app.post('/registrationHandler', async (req, res) => {
    const { name, email, password, mobile } = req.body;

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(mobile);

    try {
        await dbconn(); // Connect to the database
        
        console.log("Connected to the database");

        // Create a new user instance using the User model
        const newUser = new User({
            name,
            email,
            password,
            mobile

        });
       
        // Save the new user to the database
                await newUser.save();
               console.log("data saved ")
               res.status(200).json({message: "registering user" });
        // Respond with a success message or the saved user data
     
        
        
      
        
    } catch (error) {
        console.error("Error registering user:", error);
        // Respond with an error message
       return  res.status(500).json({ error: "An error occurred while registering user" });
    }
});
app.post('/registeradminHandler', async (req, res) => {
  const { username, email, password } = req.body;

  console.log(username);
  console.log(email);
  console.log(password);
  

  try {
      await dbconn(); // Connect to the database
      console.log("Connected to the database");

      // Create a new user instance using the User model
      const newAdmin = new Addata({
          username,
          email,
          password,
    
      });
     
      // Save the new user to the database
              await newAdmin.save();
             console.log("data saved ")
            res.status(200).json({message:"login successful"})
      // Respond with a success message or the saved user data
   
      
      
    
      
  } catch (error) {
      console.error("Error registering user:", error);
      // Respond with an error message
    return  res.status(500).json({ message: "An error occurred while registering admin" });

  }
  
});
app.post ('/addbookhandler',async (req,res)=>{
  const {title,author,image,category,price,link}=req.body;
  console.log(title);
  console.log(author);
  console.log(image);
  console.log(category);
  console.log(price);
  console.log(link)
  try {
    await dbconn(); // Connect to the database
    console.log("Connected to the database");

    // Create a new user instance using the User model
    const newdata = new Admin({

        
        title ,
        author,image,category,price,link
    });

    // Save the new user to the database
    const saveddata = await newdata.save();

    // Respond with a success message or the saved user data
    res.status(201).json(saveddata);
   
} catch (error) {
    console.error("Error ADDING BOOK:", error);
    // Respond with an error message
   return  res.status(500).json({ error: "An error occurred whilE ADDING BOOK" });
}
})
app.get('/books', async (req, res) => {
  try {
      await dbconn(); // Connect to the database
      const books = await Admin.find();
      
      res.json(books);
  } catch (error) {
      console.error('Error fetching books:', error);
    return   res.status(500).json({ error: 'An error occurred while fetching books' });
  }
});
app.get('/users', async (req, res) => {
  try {
      await dbconn(); // Connect to the database
      const users = await User.find({}); // Exclude _id and password fields
      res.json(users);
  } catch (error) {
      console.error('Error fetching users:', error);

      return res.status(500).json({ error: 'An error occurred while fetching users' });

  }
});





// Endpoint to get all unique book categories
app.get('/books/categories', async (req, res) => {
  try {
    await dbconn(); // Connect to the database
    
    // Fetch distinct categories from the Adata collection
    const categories = await Admin.distinct('category');

    if (categories.length === 0) {
      return res.status(404).json({ message: 'No categories found' });
    }

    res.json(categories); // Send the list of categories as JSON
  } catch (error) {
    console.error('Error fetching categories:', error);
    return res.status(500).json({ error: 'An error occurred while fetching categories' });
  }
});

// end point to get all authors;
app.get('/books/authors', async (req, res) => {
  try {
    await dbconn(); // Connect to the database
    
    // Fetch distinct categories from the Adata collection
    const categories = await Admin.distinct('author');

    if (categories.length === 0) {
      return res.status(404).json({ message: 'No categories found' });
    }

    res.json(categories); // Send the list of categories as JSON
  } catch (error) {
    console.error('Error fetching categories:', error);
    return res.status(500).json({ error: 'An error occurred while fetching categories' });
  }
});


// Fetch books by author
app.get('/books/author/:authorName', async (req, res) => {
  try {
      await dbconn(); // Connect to the database

      const authorName = req.params.authorName; // Get the author's name from the request parameters

      // Fetch books where the author matches the provided name
      const books = await Admin.find({ author: authorName });

      if (books.length === 0) {
          return res.status(404).json({ message: 'No books found for this author' });
      }

      res.json(books); // Send the list of books as JSON
  } catch (error) {
      console.error('Error fetching books by author:', error);
      return res.status(500).json({ error: 'An error occurred while fetching books' });
  }
});




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

