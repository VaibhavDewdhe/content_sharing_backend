let sharedText = "Initial shared content";

exports.getContent = (req, res) => {
  res.json({ text: sharedText });
};

exports.setContent = (req, res) => {
  sharedText = req.body.text;
  res.json({ message: "Content updated" });
};
