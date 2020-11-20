const { ApolloClient } = require("apollo-client");
const { HttpLink } = require("apollo-link-http");
const { InMemoryCache } = require("apollo-cache-inmemory");
const gql = require("graphql-tag");

const client = new ApolloClient({
  link: new HttpLink({ uri: "/api" }),
  cache: new InMemoryCache(),
});

const postGold = (ev) => {
  ev.preventDefault();
  const gold = form.elements["gold"].value;

  let mutation = gql`
    mutation PostGold($newGold: GoldInput!) {
      createGold(goldInput: $newGold) {
        gold {
          text
          created_at
        }
        message
        status
      }
    }
  `;

  client
    .mutate({
      mutation,
      variables: { newGold: { text: gold, user_id: "0", gold_type: "common" } },
    })
    .then((data) => {
      renderGoldResponse(data);
      getGolds();
    })
    .catch((error) => console.error(error));

  form.reset();
};

const renderGoldResponse = ({ data }) => {
  const {
    createGold: {
      gold: { created_at },
    },
  } = data;

  while (goldContainer.firstChild) {
    goldContainer.removeChild(goldContainer.firstChild);
  }

  const goldFragment = document.createDocumentFragment();
  const goldP = document.createElement("p");

  goldP.textContent = `${created_at}`;

  goldFragment.appendChild(goldP);
  goldContainer.appendChild(goldFragment);
};

const renderGoldsResponse = ({ data }) => {
  console.log(data);
  const { golds } = data;

  while (goldsContainer.firstChild) {
    goldsContainer.removeChild(goldsContainer.firstChild);
  }

  const goldsFragment = document.createDocumentFragment();
  const goldsList = document.createElement("ul");

  golds.forEach((gold) => {
    const goldListItem = document.createElement("li");
    goldListItem.textContent = `${gold.text}`;
    goldsList.appendChild(goldListItem);
  });

  goldsFragment.appendChild(goldsList);
  goldsContainer.appendChild(goldsFragment);
};

const renderResponse = ({ data }) => {
  const {
    tree: { branches = [] },
  } = data;

  while (treeContainer.firstChild) {
    treeContainer.removeChild(treeContainer.firstChild);
  }

  const treeFragment = document.createDocumentFragment();
  const branchesList = document.createElement("ul");

  branches.forEach((branch) => {
    const branchListItem = document.createElement("li");
    branchListItem.textContent = `${branch.title}`;
    branchesList.appendChild(branchListItem);
  });

  treeFragment.appendChild(branchesList);
  treeContainer.appendChild(treeFragment);
};

const getGolds = () => {
  client
    .query({
      query: gql`
        query GetGolds {
          golds {
            text
          }
        }
      `,
    })
    .then((data) => renderGoldsResponse(data))
    .catch((error) => console.error(error));
};

getGolds();

const getTree = (ev) => {
  ev.preventDefault();
  const gold = form.elements["gold"].value;

  client
    .query({
      query: gql`
        query GetTree($treeUrl: String!) {
          tree(xmlUrl: $treeUrl) {
            branches {
              title
            }
          }
        }
      `,
      variables: { treeUrl: "whatever" },
    })
    .then((data) => renderResponse(data))
    .catch((error) => console.error(error));
};

const goldContainer = document.querySelector("#gold-container");
const goldsContainer = document.querySelector("#golds-container");
const treeContainer = document.querySelector("#tree-container");
const form = document.querySelector("#post-gold");
form.addEventListener("submit", postGold);

const treeButton = document.querySelector("#get-tree");
treeButton.addEventListener("click", getTree);
