package com.aptitude.service;

import com.aptitude.entity.Category;
import com.aptitude.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Category getCategoryById(int categoryId) {
        return categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found with id: " + categoryId));
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
    public Category updateCategory(int id, Category updatedCategory) {
        return categoryRepository.findById(id).map(category -> {
            category.setCategoryName(updatedCategory.getCategoryName());
            category.setDescription(updatedCategory.getDescription());
            return categoryRepository.save(category);
        }).orElse(null);
    }

    public void deleteCategory(int categoryId) {
        categoryRepository.deleteById(categoryId);
    }
}

