// Some data to make the trick

import type { RequestHandler } from "express";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredPrograms = categories.filter((categories) =>
      categories.name.includes(req.query.q as string),
    );

    res.json(filteredPrograms);
  } else {
    res.json(categories);
  }
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const category = categories.find((p) => p.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

/* Here you code */

// Export them to import them somewhere else

export default {
  /* Here you export */ browse,
  read,
};
