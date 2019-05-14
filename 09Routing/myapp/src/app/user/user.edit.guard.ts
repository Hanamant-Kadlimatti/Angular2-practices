import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

export class UserEditGuard implements CanDeactivate {
      canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {
         return component.canDeactivate? component.canDeactivate() : true
      }
} 