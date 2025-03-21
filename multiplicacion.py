def mult_w_mult(a, b):
    c = 0  
    suma = 0 
    
    while c != b:  
        suma += a  
        c += 1  
    
    return suma  

print(mult_w_mult(6, 8))  
print(mult_w_mult(3, 4))  
print(mult_w_mult(5, 5))  
print(mult_w_mult(2, 0))  