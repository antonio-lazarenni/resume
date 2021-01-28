async function fetchAPI(
    query: string,
    { variables, preview } = { variables: undefined, preview: undefined }
) {
    const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${
                preview ? process.env.GRAPHCMS_AUTH_TOKEN : process.env.GRAPHCMS_AUTH_TOKEN
            }`
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
    const json = await res.json();

    if (json.errors) {
        // console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID)
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }

    return json.data;
}

export async function getAuthorById(id) {
    const data = await fetchAPI(
        `
      query AuthorById($id: ID!) {
        author(where: {id: $id}) {
          name
          biography
          title
          github
          linkedin
          email
          picture {
            url
          }
          educations {
            id
            location
            period
            title
            institutionName
          }
          posts(orderBy: createdAt_DESC) {
            id
            company
            title
            updatedAt
            tags
            stage
            slug
            publishedAt
            period
            location
            link
            id
            excerpt
            date
            createdAt
            content {
              html
            }
          }
        }
      }
      `,
        {
            preview: true,
            variables: {
                stage: 'DRAFT',
                id
            }
        }
    );

    return data.author;
}
