import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPermissions]'
})
export class PermissionsDirective
{
  @Input() appPermission: string[] = [];
  private currentRole = 'agent';

  constructor() { }

}
