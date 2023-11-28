import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.registroForm = this.fb.group({
      nombreUsuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefono: [''],
      fechaNacimiento: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
      
  }
  registrarUsuario() {
    if (this.registroForm.valid) {
      const nuevoUsuario: Usuario = this.registroForm.value;
      this.usuarioService.crearUsuario(nuevoUsuario)
        .subscribe(
          usuarioRegistrado => {
            console.log('Usuario registrado:', usuarioRegistrado);
            // Puedes realizar redirecciones o acciones adicionales después del registro exitoso
          },
          error => {
            console.error('Error al registrar usuario:', error);
          }
        );
    } else {
      // Manejar validaciones del formulario
      console.log('Formulario inválido. Por favor, complete los campos requeridos.');
    }
  }
}
