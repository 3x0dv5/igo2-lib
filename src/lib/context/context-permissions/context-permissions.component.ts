import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Context, ContextPermission, ContextPermissionsList } from '../shared';

@Component({
  selector: 'igo-context-permissions',
  templateUrl: './context-permissions.component.html',
  styleUrls: ['./context-permissions.component.styl']
})
export class ContextPermissionsComponent implements OnInit {

  public form: FormGroup;

  @Input()
  get context(): Context { return this._context; }
  set context(value: Context) {
    this._context = value;
  }
  private _context: Context;

  @Input()
  get permissions(): ContextPermissionsList { return this._permissions; }
  set permissions(value: ContextPermissionsList) {
    this._permissions = value;
  }
  private _permissions: ContextPermissionsList;

  @Output() addPermission: EventEmitter<ContextPermission> = new EventEmitter();
  @Output() removePermission: EventEmitter<ContextPermission> = new EventEmitter();
  @Output() scopeChanged: EventEmitter<Context> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public handleFormSubmit(value) {
    this.addPermission.emit(value);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      'profil': [],
      'typePermission': ['read']
    });
  }

}
