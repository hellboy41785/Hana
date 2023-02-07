export const animeData = (season, seasonYear, page, perPage) => {
  const data = {
    query: `
        query($season: MediaSeason,$seasonYear: Int,$page: Int,$perPage: Int){
            Page(page: $page, perPage:$perPage) {
              pageInfo {
                total
                perPage
                currentPage
                lastPage
                hasNextPage
              }
              media(type: ANIME, season: $season, seasonYear: $seasonYear, sort:UPDATED_AT_DESC,isAdult:false) {
                id
                title {
                  romaji
                  english
                
                }
                season
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
                format
                seasonYear
                episodes
                type
                source
                meanScore
                studios(sort:FAVOURITES_DESC) {
                  nodes {
                    id
                    name
                  }
                }
                airingSchedule {
                  pageInfo {
                    total
                    perPage
                    currentPage
                    lastPage
                    hasNextPage
                  }
                }
                status
              }
            }
          }
        `,
    variables: { season, seasonYear, page, perPage },
  };
  return data;
};

export const mangaData = (page, perPage) => {
  const data = {
    query: `
    query($page: Int,$perPage: Int){
      Page(page: $page, perPage:$perPage) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        media(type:MANGA sort:TRENDING_DESC ,isAdult:false) {
          id
          title {
            romaji
            english
          }
          type
          format
          status
          episodes
          meanScore
          studios(sort:FAVOURITES_DESC) {
            nodes {
              id
              name
            }
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
        }
      }
      }
    `,
    variables: { page, perPage },
  };
  return data;
};
export const Information = (type, id) => {
  const data = {
    query: `
    query($id:Int,$type:MediaType){
      
      Media (id: $id, type:$type){ 
        id
        title {
          romaji
          english
          native
        }
        type
        status
        source
        status
        season
        chapters
        episodes
        averageScore
        format
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        description
        bannerImage
        airingSchedule(notYetAired:true) {
          nodes {
            id
            airingAt
            episode
            timeUntilAiring
          }
        }
        characters {
          edges {
            id
            name
            node {
              id
              image {
                large
                medium
              }
              name {
                full
                native
              }
            }
          }
        }
        staff {
          edges {
            id
            node {
              id
              name {
                first
                middle
                last
                full
                native
                userPreferred
              }
            }
          }
        }
        rankings {
          id
          rank
          season
        }
        tags {
          id
          name
          rank
        }
        studios {
          edges {
            id
            node {
              id
              name
            }
          }
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        relations {
          edges {
            relationType
            node {
              id
              title {
                romaji
                english
                native
                userPreferred
              }
              type
              format
              coverImage {
                extraLarge
                large
                medium
                color
              }
            }
          }
        }
        recommendations{
          edges{
            node{
              mediaRecommendation {
                id
               title {
                 romaji
                 english
                 native
                 userPreferred
               }
               type
               format
               source
               meanScore
               episodes
               status
               coverImage {
                 extraLarge
                 large
                
               }
               studios(sort:FAVOURITES_DESC) {
                nodes {
                  id
                  name
                }
              }
              }
            }
          }
        }
        reviews {
          edges {
            node {
              id
              user {
                id
                name
                avatar {
                  large
                  medium
                }
              }
              summary
              createdAt
            }
          }
        }
      }
      }
    `,
    variables: { type, id },
  };
  return data;
};

export const searchData = ({ search }) => {
  const data = {
    query: `
    query($search:String){
      Page(perPage:10) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        media(search:$search,,isAdult:false) {
          id
          title {
            romaji
            english
          }
          type
          format
          episodes
          
          coverImage {
            extraLarge
            large
            medium
            color
          }
        }
      }
      }
    `,
    variables: { search },
  };
  return data;
};

export const myListData = (userId, type, status) => {
  const data = {
    query: `
          query($userId:Int,$type:MediaType $status:MediaListStatus){
            MediaListCollection(userId:$userId ,type:$type, sort:UPDATED_TIME_DESC, status:$status, forceSingleCompletedList:true) {
                lists {
                  name
                  isCustomList
                  isSplitCompletedList
                  status
                  entries {
                    id
                    status
                    progress
                    score
                    status
                    media {
                      id
                      title {
                        romaji
                        english
                        native
                        userPreferred
                      }
                      type
                      status
                      episodes
                      chapters
                      studios(sort:FAVOURITES_DESC) {
                        nodes {
                          id
                          name
                        }
                      }
                      format
                      meanScore
                      coverImage {
                        extraLarge
                        large
                        medium
                        color
                      }
                    }
                  }
                }
                user {
                  name
                  id
                }
              }
          }`,
    variables: { userId, type, status },
  };
  return data;
};

export const Lists = (userId, type) => {
  const data = {
    query: `
          query($userId:Int,$type:MediaType){
            MediaListCollection(userId:$userId, type:$type ,forceSingleCompletedList:true) {
                lists {
                  name
                  isCustomList
                  isSplitCompletedList
                  status
                }
                user {
                  name
                  id
                }
              }
          }`,
    variables: { userId, type },
  };
  return data;
};

export const saveToList = ({ mediaId, status, progress, score }) => {
  const data = {
    query: `
    mutation ($mediaId: Int, $status: MediaListStatus,$progress:Int,$score:Float) {
        SaveMediaListEntry (mediaId: $mediaId, status:$status,progress:$progress,score:$score) {
            id
            status
            progress
            score(format:POINT_10)
        }
    }`,
    variables: { mediaId, status, progress, score },
  };
  return data;
};

export const checkMyList = ({ userId, mediaId }) => {
  const data = {
    query: `
              query($userId:Int,$mediaId:Int){
                Page(perPage:1){
                  pageInfo {
                    total
                    perPage
                    currentPage
                    lastPage
                    hasNextPage
                  }
                  mediaList(userId:$userId,mediaId:$mediaId){
                    id
                    status
                    mediaId
                    progress
                    score
                  }
                }
              }`,
    variables: { userId, mediaId },
  };
  return data;
};


export const quoteData=({ searchName, searchChar })=>{
  const data = {
    query: `
    query($searchName:String,$searchChar:String){
      Media(search:$searchName){
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  type
                  status
                  bannerImage
                  format
                  seasonYear
                  episodes
                  type
                  source
                  meanScore
                  studios(sort:FAVOURITES_DESC) {
                    nodes {
                      id
                      name
                    }
                  }
                  coverImage {
                    large
                    extraLarge
                  }
                }
      Character(search:$searchChar){
                  id
                  name {
                    full
                  }
                  description
                  image {
                    large
                    medium
                  }
                }
              }`,
    variables: { searchName, searchChar },
  };
  return data;
};
