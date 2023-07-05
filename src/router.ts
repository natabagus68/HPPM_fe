// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/admin`
  | `/admin/admin-layout-model`
  | `/admin/dashboard/general`
  | `/admin/notification`
  | `/admin/report`
  | `/admin/user/access`
  | `/admin/user/access/access-model`
  | `/admin/user/access/mapping-menu`
  | `/admin/user/account`
  | `/landing-page-model`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
