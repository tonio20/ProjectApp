import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  {
    path: 'cargando',
    loadChildren: () => import('./pages/cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'rest-pasword',
    loadChildren: () => import('./pages/rest-pasword/rest-pasword.module').then( m => m.RestPaswordPageModule)
  },
  {
    path: 'secciones',
    loadChildren: () => import('./pages/secciones/secciones.module').then( m => m.SeccionesPageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./pages/asistencias/asistencias.module').then( m => m.AsistenciasPageModule)
  },

  {
    path: 'generador-qr',
    loadChildren: () => import('./pages/generador-qr/generador-qr.module').then( m => m.GeneradorQRPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'seccionprofe',
    loadChildren: () => import('./pages/seccion-p/seccion-p.module').then( m => m.SeccionPPageModule)
  },
  {
    path: 'basedatos',
    loadChildren: () => import('./pages/basedatos/basedatos.module').then( m => m.BasedatosPageModule)
  },
  {
    path: 'portafolio',
    loadChildren: () => import('./pages/portafolio/portafolio.module').then( m => m.PortafolioPageModule)
  },
  {
    path: 'ingsoftware',
    loadChildren: () => import('./pages/ingsoftware/ingsoftware.module').then( m => m.IngsoftwarePageModule)
  },
  {
    path: 'home-a',
    loadChildren: () => import('./pages/home-a/home-a.module').then( m => m.HomeAPageModule)
  },
  {
    path: 'home-p',
    loadChildren: () => import('./pages/home-p/home-p.module').then( m => m.HomePPageModule)
  },
  {
    path: 'scaner',
    loadChildren: () => import('./pages/scaner/scaner.module').then( m => m.ScanerPageModule)
  },
  {
    path: 'cerrar-sesion',
    loadChildren: () => import('./pages/cerrar-sesion/cerrar-sesion.module').then( m => m.CerrarSesionPageModule)
  },
  {
    path: 'portafolio-p',
    loadChildren: () => import('./pages/portafolio-p/portafolio-p.module').then( m => m.PortafolioPPageModule)
  },
  {
    path: 'home-p',
    loadChildren: () => import('./pages/home-p/home-p.module').then( m => m.HomePPageModule)
  },
  {
    path: 'seccion-p',
    loadChildren: () => import('./pages/seccion-p/seccion-p.module').then( m => m.SeccionPPageModule)
  },
  {
    path: 'ingsoftware-p',
    loadChildren: () => import('./pages/ingsoftware-p/ingsoftware-p.module').then( m => m.IngsoftwarePPageModule)
  },
  {
    path: 'basedatos-p',
    loadChildren: () => import('./pages/basedatos-p/basedatos-p.module').then( m => m.BasedatosPPageModule)
  },
  {
    path: 'generador-qr',
    loadChildren: () => import('./pages/generador-qr/generador-qr.module').then( m => m.GeneradorQRPageModule)
  },
  {
    path: 'portafolio-p',
    loadChildren: () => import('./pages/portafolio-p/portafolio-p.module').then( m => m.PortafolioPPageModule)
  },
  {
    path: 'basedatos-p',
    loadChildren: () => import('./pages/basedatos-p/basedatos-p.module').then( m => m.BasedatosPPageModule)
  },
  {
    path: 'ingsoftware-p',
    loadChildren: () => import('./pages/ingsoftware-p/ingsoftware-p.module').then( m => m.IngsoftwarePPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'api',
    loadChildren: () => import('./pages/api/api.module').then( m => m.ApiPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
