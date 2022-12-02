import { Component, Input } from '@angular/core';
import{OnInit} from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-uncompte',
  templateUrl: './creer-uncompte.component.html',
  styleUrls: ['./creer-uncompte.component.scss']
})
export class CreerUncompteComponent implements OnInit{

  @Input() confirmer : string = '';

  
  compteForm! : FormGroup;
  constructor(private formBuilder : FormBuilder,
    private router:Router){}

  ngOnInit(): void {
    this.compteForm = this.formBuilder.group(
      {
        nom : ['', [Validators.required, Validators.toString]], 
        prenom : ['', [Validators.required, Validators.toString]],
        motdepasse : ['', [Validators.required]],
        email : ['', [Validators.required, Validators.toString]]
      }
      
    );
    
  }
  submitCompte()
  {
    debugger //Pour voire si ça marche
    var donnesCompte = this.compteForm.getRawValue(); 
  }
}


