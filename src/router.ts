// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/admin`
  | `/admin/admin-layout-model`
  | `/admin/dashboard`
  | `/admin/master-data/dataset-input`
  | `/admin/master-data/dataset-input/dataset-input-model`
  | `/admin/master-data/dataset-input/form`
  | `/admin/master-data/dataset-input/form/form-dataset-input-model`
  | `/admin/master-data/judgement-label`
  | `/admin/master-data/judgement-label/form`
  | `/admin/master-data/judgement-label/form/judgement-label-form-model`
  | `/admin/master-data/judgement-label/judgement-label-model`
  | `/admin/master-data/parameter`
  | `/admin/master-data/parameter/form`
  | `/admin/master-data/parameter/form/form-parameter-model`
  | `/admin/master-data/parameter/parameter-model`
  | `/admin/master-data/potential-ng-cause`
  | `/admin/master-data/potential-ng-cause/form`
  | `/admin/master-data/potential-ng-cause/form/potensial-ng-cause-form-model`
  | `/admin/master-data/potential-ng-cause/potensial-ng-cause-model`
  | `/admin/notification`
  | `/admin/report`
  | `/admin/user/access`
  | `/admin/user/access/access-model`
  | `/admin/user/access/mapping-menu`
  | `/admin/user/access/mapping-menu/mapping-menu-model`
  | `/admin/user/account`
  | `/admin/user/account/account-model`
  | `/landing-page-model`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
