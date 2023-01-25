import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoschildComponent } from './todoschild.component';

describe('TodoschildComponent', () => {
  let component: TodoschildComponent;
  let fixture: ComponentFixture<TodoschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoschildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
