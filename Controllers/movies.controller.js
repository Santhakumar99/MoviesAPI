import Movie from "../Models/movie.modal.js";

export const MovieIndex = async (req, res) => {
  try {
    const data = await Movie.find();  // fetch all movie documents
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching movies", error: error.message });
  }
};
export const createMoviesList = async (req, res) => {

    //validate data 
    const Movies = new Movie({
        title: req.body.title,
        desc: req.body.desc
    });
    try {
        await Movies.save();
        res.status(201).json(Movies);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}