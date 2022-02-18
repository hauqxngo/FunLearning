import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

/** Search box in Category List page
 *
 * CategoryList -> SearchForm
 */

const SearchForm = ({ searchFor }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // get rid of the extra spaces
    let term = searchTerm.trim();
    searchFor(term || undefined);
    setSearchTerm("");
  };

  // update value in form
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="SearchForm mx-5">
        <Label for="searchForm"></Label>
        <Input
          id="searchForm"
          name="search"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="col text-center my-2">
          <Button type="submit" color="success">
            Search
          </Button>
          <Button className="mx-1" color="success" outline>
            <Link to="/categories" />
            Reset
          </Button>
        </div>
      </FormGroup>
    </Form>
  );
};

export default SearchForm;
