import { Route, Routes } from 'react-router-dom'

import { Categories } from '../../data/data'
import { RouteT, RouterT } from '../../types/types'
import { CategoriesList } from '../Categories/CategoriesList'
import { Category } from '../Categories/Category'
import { Home } from '../Home/Home'
import { NotFound } from '../common/NotFound'

export const Router = ({ search, setSearchCategory }: RouterT) => {
  const routes: RouteT[] = [
    {
      path: '/',
      element: <Home />,
      title: 'home'
    },
    {
      path: `/${Categories.PEOPLE}/`,
      element: (
        <CategoriesList
          category={`${Categories.PEOPLE}`}
          setSearchCategory={setSearchCategory}
          search={search}
        />
      ),
      category: `${Categories.PEOPLE}`,
      title: `${Categories.PEOPLE}`
    },
    {
      path: `/${Categories.PEOPLE}/:id`,
      element: <Category category={`${Categories.PEOPLE}`} />,
      category: `${Categories.PEOPLE}`,
      title: `${Categories.PEOPLE}-one`
    },
    {
      path: `/${Categories.SPECIES}/`,
      element: (
        <CategoriesList
          category={`${Categories.SPECIES}`}
          setSearchCategory={setSearchCategory}
          search={search}
        />
      ),
      category: `${Categories.SPECIES}`,
      title: `${Categories.SPECIES}`
    },
    {
      path: `/${Categories.SPECIES}/:id`,
      element: <Category category={`${Categories.SPECIES}`} />,
      category: `${Categories.SPECIES}`,
      title: `${Categories.SPECIES}-one`
    },
    {
      path: `/${Categories.PLANETS}/`,
      element: (
        <CategoriesList
          category={`${Categories.PLANETS}`}
          setSearchCategory={setSearchCategory}
          search={search}
        />
      ),
      title: `${Categories.PLANETS}`
    },
    {
      path: `/${Categories.PLANETS}/:id`,
      element: <Category category={`${Categories.PLANETS}`} />,
      title: `${Categories.PLANETS}-one`
    },
    {
      path: `/${Categories.STARSHIPS}/`,
      element: (
        <CategoriesList
          category={`${Categories.STARSHIPS}`}
          setSearchCategory={setSearchCategory}
          search={search}
        />
      ),
      title: `${Categories.STARSHIPS}`
    },
    {
      path: `/${Categories.STARSHIPS}/:id`,
      element: <Category category={`${Categories.STARSHIPS}`} />,
      title: `${Categories.STARSHIPS}-one`
    },
    {
      path: `/${Categories.VEHICLES}/`,
      element: (
        <CategoriesList
          category={`${Categories.VEHICLES}`}
          setSearchCategory={setSearchCategory}
          search={search}
        />
      ),
      title: `${Categories.VEHICLES}`
    },
    {
      path: `/${Categories.VEHICLES}/:id`,
      element: <Category category={`${Categories.VEHICLES}`} />,
      title: `${Categories.VEHICLES}-one`
    },
    {
      path: `/${Categories.FILMS}/`,
      element: (
        <CategoriesList
          category={`${Categories.FILMS}`}
          setSearchCategory={setSearchCategory}
          search={search}
        />
      ),
      title: `${Categories.FILMS}`
    },
    {
      path: `/${Categories.FILMS}/:id`,
      element: <Category category={`${Categories.FILMS}`} />,
      title: `${Categories.FILMS}-one`
    },
    {
      path: `/*`,
      element: <NotFound />,
      title: 'notFound'
    }
  ]

  const routerItems = routes.map((item: RouteT) => {
    return <Route key={item.title} path={item.path} element={item.element} />
  })

  return <Routes>{routerItems}</Routes>
}
